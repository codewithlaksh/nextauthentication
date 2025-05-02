import { connectDb } from "@/lib/db";
import { UserModel } from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(request) {
    await connectDb();

    const _jsonData = await request.json();
    let success = false;

    const { name, username, email, password } = _jsonData;

    const usernameRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (!username || !email || !password) {
        return NextResponse.json({
            success,
            message: 'All the fields are required!'
        }, { status: 400 })
    } else if (!usernameRegex.test(username)) {
        return NextResponse.json({
            success,
            message: 'Username must contain alphanumeric characterss!'
        }, { status: 400 })
    } else if (!emailRegex.test(email)) {
        return NextResponse.json({
            success,
            message: 'Invalid email address!'
        }, { status: 400 })
    } else {
        let user = await UserModel.findOne({
            $or: [{ username }, { email }]
        });

        if (user) {
            return NextResponse.json({
                success,
                message: 'Username or email already taken!'
            }, {status: 400})
        } else {
            user = new UserModel({
                name: _jsonData['name'],
                username: _jsonData['username'],
                email: _jsonData['email'],
                password: _jsonData['password'],
            });
            await user.save();
            success = true;

            return NextResponse.json({
                success,
                message: 'User account has been created!'
            }, {status: 201})
        }
    }

}
