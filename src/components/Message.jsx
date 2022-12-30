
export default function Message({message}) {
    const [timestamp, content] = message
    return (
        <div className='message'>
            <div className='small'>{timestamp}</div>
            <div className='hr'></div>
            <div className='content'>{content}</div>
        </div>
    );
} 