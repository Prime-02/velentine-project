import { sendEmail } from '@/lib/mailer';

export async function POST(req) {
  try {
    const { response, reason } = await req.json();

    let subject;
    let htmlContent;

    if (response === 'yes') {
      subject = '💕 She Said YES! 💕';
      htmlContent = `
        <div style="font-family: 'Poppins', sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; border-radius: 15px; text-align: center; color: white;">
          <h1 style="font-size: 48px; margin: 20px 0; animation: heartbeat 0.6s ease-in-out;">💖</h1>
          <h2 style="font-size: 32px; margin: 20px 0; font-family: 'Playfair Display';">She Said YES!</h2>
          <p style="font-size: 18px; line-height: 1.6; margin: 20px 0;">
            Your Valentine proposal was accepted! This is the best day ever! 🎉
          </p>
          <p style="font-size: 14px; color: rgba(255, 255, 255, 0.8); margin-top: 30px;">
            This message was sent from your Valentine proposal app.
          </p>
        </div>
      `;
    } else {
      const reasonText = reason
        ? `Reason given: "${reason}"`
        : 'No reason provided.';
      subject = '💔 Valentine Response';
      htmlContent = `
        <div style="font-family: 'Poppins', sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; border-radius: 15px; text-align: center; color: white;">
          <h1 style="font-size: 48px; margin: 20px 0;">💔</h1>
          <h2 style="font-size: 32px; margin: 20px 0; font-family: 'Playfair Display';">They Said No</h2>
          <p style="font-size: 18px; line-height: 1.6; margin: 20px 0;">
            Your Valentine proposal response:
          </p>
          <p style="font-size: 16px; background: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid rgba(255, 255, 255, 0.5);">
            ${reasonText}
          </p>
          <p style="font-size: 14px; color: rgba(255, 255, 255, 0.8); margin-top: 30px;">
            This message was sent from your Valentine proposal app.
          </p>
        </div>
      `;
    }

    const result = await sendEmail(subject, htmlContent);

    return Response.json(result, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return Response.json(
      {
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
