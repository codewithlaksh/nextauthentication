import { resend } from "./resend";
import VerificationEmail from "@/emails/verification-email";

export async function sendVerificationEmail(email, username, token) {
    let success = false;

    try {
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: email,
            subject: "Email Verification - NextAuthentication",
            react: VerificationEmail({ username, token })
        });
        success = true;

        return { success, message: "Please check your email for further instructions!" };
    } catch (error) {
        console.log("Error sending verification email: ", error);

        return { success, message: "Failed to send verification email!" };
    }
}
