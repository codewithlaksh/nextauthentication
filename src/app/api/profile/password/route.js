import { connectDb } from "@/lib/db";
import { cookies } from "next/headers";
import { UserModel } from "@/models/user.model";
import jwt from "jsonwebtoken";
import { config } from "@/lib/config-env";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function PUT(request) {
    await connectDb();

    const cookiesStore = await cookies();
    const authToken = cookiesStore.get('authtoken');
    let success = false;

    const _jsonData = await request.json();

    const { oldPassword, newPassword } = _jsonData;

    if (!authToken) {
        return NextResponse.json({
            message: 'Unauthorized request!'
        }, { status: 401 })
    } else {
        try {
            const decoded = jwt.verify(authToken.value, config.AUTH_TOKEN_SECRET);
            const user = await UserModel.findById(decoded.id);

            const verifyOldPassword = await bcrypt.compare(oldPassword, user.password);

            if (verifyOldPassword) {
                await UserModel.findByIdAndUpdate(decoded.id, {
                    $set: {
                        password: await bcrypt.hash(newPassword, 12)
                    }
                })

                success = true;

                return NextResponse.json({
                    success,
                    message: 'Password updated successfully!'
                }, { status: 200 })
            } else {
                return NextResponse.json({
                    success,
                    message: 'Incorrect old password!'
                }, { status: 400 })
            }
        } catch (error) {
            return NextResponse.json({
                message: 'Invalid or expired token!'
            }, { status: 400 })
        }
    }

}