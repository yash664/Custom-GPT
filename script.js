let threadId = null;

window.onload = () => {
    initializeChat();
    document.getElementById('send-button').addEventListener('click', sendMessage);
};

function initializeChat() {
    fetch('https://custom-gpts-to-website--yashoosworld.repl.co/start', {
        method: 'GET' // Assuming the endpoint uses GET. Change if necessary.
    })
    .then(response => response.json())
    .then(data => {
        threadId = data.thread_id;
    })
    .catch(error => console.error('Error:', error));
}

function sendMessage() {
    const userMessage = document.getElementById('user-input').value;
    if (userMessage.trim() === '') return;

    displayMessage('User', userMessage);

    const payload = {
        thread_id: threadId,
        message: userMessage
    };

    fetch('https://custom-gpts-to-website--yashoosworld.repl.co/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        displayMessage('GPT', data.response);
    })
    .catch(error => console.error('Error:', error));

    document.getElementById('user-input').value = ''; // Clear input field
}


function displayMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message');

    if (sender === 'GPT') {
        let formattedMessage = message
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
            .replace(/(\d+)\. /g, '<br><strong>$1.</strong> ') // Numbered lists
            .replace(/(Benefits for .*?):/g, '<br><strong>$1:</strong><br>') // Headings like "Benefits for..."
            .replace(/- (.*?)(<br>|$)/g, '<div style="margin-left: 20px;">• $1</div>'); // Bullet points

        const gptLabel = document.createElement('div');
        gptLabel.classList.add('gpt-label');
        gptLabel.textContent = `${sender}:`;
        messageContainer.appendChild(gptLabel);

        const gptMessageContent = document.createElement('div');
        gptMessageContent.classList.add('gpt-message-content');
        gptMessageContent.innerHTML = formattedMessage;
        messageContainer.appendChild(gptMessageContent);
    } else {
        // User message
        const userMessage = document.createElement('span');
        userMessage.classList.add('user-label');
        userMessage.textContent = `${sender}: `;

        const userMessageContent = document.createElement('span');
        userMessageContent.classList.add('user-message-content');
        userMessageContent.textContent = message;

        messageContainer.appendChild(userMessage);
        messageContainer.appendChild(userMessageContent);
    }

    chatBox.appendChild(messageContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
}




// function displayMessage(sender, message) {
//     const chatBox = document.getElementById('chat-box');
//     const messageContainer = document.createElement('div');
//     messageContainer.classList.add('message');

//     if (sender === 'GPT') {
//         let formattedMessage = message
//             .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
//             .replace(/(\d+)\. /g, '<br><strong>$1.</strong> ') // Numbered lists
//             .replace(/(Benefits for .*?):/g, '<br><strong>$1:</strong><br>') // Headings like "Benefits for..."
//             .replace(/- (.*?)(<br>|$)/g, '<div style="margin-left: 20px;">• $1</div>'); // Bullet points

//         const gptLabel = document.createElement('div');
//         gptLabel.classList.add('gpt-label');
//         gptLabel.textContent = `${sender}:`;
//         messageContainer.appendChild(gptLabel);

//         const gptMessageContent = document.createElement('div');
//         gptMessageContent.classList.add('gpt-message-content');
//         gptMessageContent.innerHTML = formattedMessage;
//         messageContainer.appendChild(gptMessageContent);
//     } else {
//         // User message
//         const userMessage = document.createElement('span');
//         userMessage.classList.add('user-label');
//         userMessage.textContent = `${sender}: `;

//         const userMessageContent = document.createElement('span');
//         userMessageContent.classList.add('user-message-content');
//         userMessageContent.textContent = message;

//         messageContainer.appendChild(userMessage);
//         messageContainer.appendChild(userMessageContent);
//     }

//     chatBox.appendChild(messageContainer);
//     chatBox.scrollTop = chatBox.scrollHeight;
// }






// //colour codes added and padding too 
// function displayMessage(sender, message) {
//     const chatBox = document.getElementById('chat-box');
//     const messageContainer = document.createElement('div');
//     messageContainer.classList.add('message');

//     if (sender === 'GPT') {
//         // GPT Label
//         const gptLabel = document.createElement('div');
//         gptLabel.classList.add('gpt-label');
//         gptLabel.textContent = `${sender}:`;
//         messageContainer.appendChild(gptLabel);

//         // GPT Message Content
//         const gptMessageContent = document.createElement('div');
//         gptMessageContent.classList.add('gpt-message-content');
//         gptMessageContent.textContent = message;
//         messageContainer.appendChild(gptMessageContent);
//     } else {
//         // User Message (Label and Content on the same line)
//         const userMessage = document.createElement('span');
//         userMessage.classList.add('user-label');
//         userMessage.textContent = `${sender}: `;

//         const userMessageContent = document.createElement('span');
//         userMessageContent.classList.add('user-message-content');
//         userMessageContent.textContent = message;

//         messageContainer.appendChild(userMessage);
//         messageContainer.appendChild(userMessageContent);
//     }

//     chatBox.appendChild(messageContainer);
//     chatBox.scrollTop = chatBox.scrollHeight;
// }







// function displayMessage(sender, message) {
//     const chatBox = document.getElementById('chat-box');
//     const messageElement = document.createElement('div');
//     messageElement.classList.add('message');

//     if (sender === 'GPT') {
//         // Convert markdown-like syntax to HTML
//         let formattedMessage = message
//             .replace(/\n\n/g, '<br>') // Replace double line breaks with <br>
//             .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Replace **text** with <strong>text</strong>
//             .replace(/- (.*?)(<br>|$)/g, '<li>$1</li>'); // Replace bullet points with list items

//         formattedMessage = `<ul>${formattedMessage}</ul>`; // Wrap the formatted message in <ul> tags

//         messageElement.innerHTML = `${sender}: ${formattedMessage}`;
//     } else {
//         messageElement.classList.add(sender === 'User' ? 'user-message' : 'gpt-message');
//         messageElement.textContent = message;
//     }

//     chatBox.appendChild(messageElement);

//     // Scroll to the bottom of the chat box
//     chatBox.scrollTop = chatBox.scrollHeight;
// }



// function displayMessage(sender, message) {
//     const chatBox = document.getElementById('chat-box');
//     const messageElement = document.createElement('div');
//     messageElement.classList.add('message');

//     if (sender === 'GPT') {
//         // Convert markdown-like syntax to HTML
//         let formattedMessage = message
//             .replace(/\n\n/g, '<br><br>') // Replace double line breaks with <br><br>
//             .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
//             .replace(/### (.*?)(<br>|$)/g, '<h3>$1</h3>') // Headings
//             .replace(/- (.*?)(<br>|$)/g, '<li>$1</li>'); // Bullet points

//         // Wrap bullet points in <ul> tags if they exist
//         if (formattedMessage.includes('<li>')) {
//             formattedMessage = `<ul>${formattedMessage}</ul>`;
//         }

//         messageElement.innerHTML = `${sender}: ${formattedMessage}`;
//         messageElement.classList.add('gpt-message');
//     } else {
//         messageElement.textContent = `${sender}: ${message}`;
//         messageElement.classList.add('user-message');
//     }

//     chatBox.appendChild(messageElement);

//     // Scroll to the bottom of the chat box
//     chatBox.scrollTop = chatBox.scrollHeight;
// }

