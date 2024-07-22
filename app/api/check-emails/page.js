

import checkForEmails from '../../lib/recieveEmails';

export default async function POST(req) {
    console.log(req)
    return
    const { user, password, host, port } = await req.json();

    if (!user || !password || !host || !port) {
        return Response.json({ message: 'Missing required fields' }, { status: 400 });
    }

    try {
        console.log("hi");
        await checkForEmails({ user, password, host, port });
        return Response.json({ message: 'Checked for emails and processed accordingly.' });
    } catch (error) {
        console.error('Error checking emails:', error);
        return Response.json({ message: 'Error checking emails', error: error.message }, { status: 500 });
    }
}

export async function GET() {
    return Response.status(405).send('Method Not Allowed');
}




// import checkForEmails from '../../lib/recieveEmails';

// export default async function handler(req, res) {
//     if (req.method !== 'GET') {
//         return res.status(405).send('Method Not Allowed');
//     }
//     try {
//         await checkForEmails();
//         res.status(200).json({ message: 'Checked for emails and processed accordingly.' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error checking emails', error: error.message });
//     }
// }
