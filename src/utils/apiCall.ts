import { Submission } from "./types";

const handleError = (response: Response) => {
  if (!response.ok) {
    console.log('response', response);
    throw new Error(`Error: ${response.status} -- Please try again.`);
  }
  return response.json();
};

export const sendEmail = async (form: Submission) => {
  try {
    const response = await fetch('/api/mail', {
      method: "POST", 
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await handleError(response);
    return data;
  } catch (error) {
    throw error;
  }
};


// export interface Submission {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// export const sendEmail = async (form: Submission) => {
//   const response = await fetch('/api/mail', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(form),
//   });

//   if (!response.ok) {
//     const errorText = await response.text();
//     throw new Error(errorText || 'Failed to send email');
//   }

//   return response.json();
// };
