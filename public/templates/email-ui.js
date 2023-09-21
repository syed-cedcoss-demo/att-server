export const signup = (data) => {
  return `
      <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Abyssinica+SIL&family=Inter:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
  </head>
  <style>
    body {
      background-color: #f4f4f5;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Inter", sans-serif;
      color: #344054;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 1px;
    }
  </style>
  <body>
    <div
      style="
        max-width: 768px;
        max-height: 880px;
        background-color: #ffffff;
        padding: 30px;
        border-radius: 8px;
      "
    >
      <h1>ATT Apps</h1>
      <p>Hi ${data?.name},</p>
      <p>This is your verification code:</p>
      <div style="padding: 30px 0px">
        <span
          style="
            color: #7f56d9;
            border: solid #7f56d9 3px;
            font-weight: 500;
            font-size: 48px;
            border-radius: 8px;
            padding: 4px 16px;
            margin-right: 5px;
          "
          >${data?.otp?.charAt(0)}</span
        >
        <span
          style="
            color: #7f56d9;
            border: solid #7f56d9 3px;
            font-weight: 500;
            font-size: 48px;
            border-radius: 8px;
            padding: 4px 16px;
            margin-right: 5px;
          "
          >${data?.otp?.charAt(1)}</span
        >
        <span
          style="
            color: #7f56d9;
            border: solid #7f56d9 3px;
            font-weight: 500;
            font-size: 48px;
            border-radius: 8px;
            padding: 4px 16px;
            margin-right: 5px;
          "
          >${data?.otp?.charAt(2)}</span
        >
        <span
          style="
            color: #7f56d9;
            border: solid #7f56d9 3px;
            font-weight: 500;
            font-size: 48px;
            border-radius: 8px;
            padding: 4px 16px;
            margin-right: 5px;
          "
          >${data?.otp?.charAt(3)}</span
        >
      </div>
      <p style="max-width: 640px; font-style: normal; margin-bottom: 30px">
        This mail will only be valid for the next 30 min, If the code does not work, You
        con use below login verification link:
      </p>
      <a
        href=${data?.url}
        style="
          background-color: #7f56d9;
          color: #ffffff;
          font-weight: 600;
          padding: 10px 18px;
          text-decoration: none;
          border-radius: 5px;
          font-size: 18px;
        "
        >Verify email</a
      >
      <p style="margin-top: 40px">
        Thanks <br />
        <strong>DEV: Syed Hasnain Mehadi</strong>
      </p>
      <p style="font-size: 12px">
        mail sent from Syed's SMTP server
      </p>
    </div>
  </body>
</html>

      `;
};

export const forget = (data) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Abyssinica+SIL&family=Inter:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
  </head>
  <style>
    body {
      background-color: #f4f4f5;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Inter", sans-serif;
      color: #5a6270;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 1px;
    }
  </style>
  <body>
    <div
      style="
        max-width: 768px;
        max-height: 880px;
        background-color: #ffffff;
        padding: 30px;
        border-radius: 8px;
      "
    >
      <h1>ATT Apps</h1>
      <p>Hey <strong>${data?.email}</strong>,</p>
      <p style="max-width: 640px; font-style: normal; margin-bottom: 30px">
        Use blow button to reset your password
      </p>
      <a
        href="${data?.url}"
        style="
          background-color: #7f56d9;
          color: #ffffff;
          font-weight: 600;
          padding: 10px 18px;
          text-decoration: none;
          border-radius: 5px;
          font-size: 18px;
        "
        onMouseOver="this.style.backgroundColor='#9f88d1'"
        onMouseOut="this.style.backgroundColor='#7f56d9'"
        >Click Here</a
      >
      <p style="margin-top: 40px">
        Thanks <br />
        <strong>DEV: Syed Hasnain Mehadi</strong>
      </p>
      <p style="font-size: 12px">
        mail sent from Syed's SMTP server
      </p>
    </div>
  </body>
</html>
`;
};
