import clsx from 'clsx';

function Button(props) {
    const { className = 'bg-blue-500', children, text } = props;
    return (
        <button
            {...props}
            className={clsx(className, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded')}
        >
            {text || children}
        </button>
    );
}

export default Button;
