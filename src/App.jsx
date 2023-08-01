import {
    IconBrandFacebook,
    IconBrandGithub,
    IconLogin,
    IconRegistered,
} from '@tabler/icons-react';

export default function App() {
    return (
        <div>
            <div
                className={
                    'bg-slate-600 grid place-content-center min-h-screen'
                }
            >
                <div className={'flex gap-x-2'}>
                    {/* style component 1 */}
                    {/* <Button text='Login' />
                    <Button text='Register' /> */}

                    {/* style component with icons use calibraket block*/}
                    <Button className={'bg-blue-500'} type='Submit'>
                        <IconLogin />
                        Login
                    </Button>
                    <Button
                        className={'bg-pink-500'}
                        onClick={() => console.log('Hello Register')}
                    >
                        <IconBrandFacebook />
                        Register
                    </Button>
                    <Button onClick={() => console.log('Hello Register')}>
                        <IconBrandGithub />
                        Reset
                    </Button>
                </div>
            </div>
        </div>
    );
}

function Button(props) {
    const { className = 'bg-blue-500', children, text } = props;
    return (
        <button
            {...props}
            className={`${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
        >
            {text || children}
        </button>
    );
}
