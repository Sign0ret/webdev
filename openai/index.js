const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

async function main() {
    let messages = [
        {role: 'system', content: 'Eres un excelente profesor de desarrollo web.'},
        {role: 'user', content: 'Qué es una API?'},
        {role: 'assistant', content: 'Un API es una Interfaz de Programación para Aplicaciones'}
    ]

    let userResponse = 'Oye, no entendí bien, cómo funciona una API?'

    messages.push({role: 'user', content: userResponse})

    const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: messages
    })

    console.log(completion.choices[0].message.content);
}

main()