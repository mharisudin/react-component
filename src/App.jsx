export default function App() {
    return (
        <div>
            <div
                className={
                    'bg-slate-600 grid place-content-center min-h-screen'
                }
            >
                <Button text='Login' />
                <Button text='Register' />
            </div>
        </div>
    );
}

function Button(props) {
    return (
        <button
            className={
                'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            }
        >
            {props.text}
        </button>
    );
}
