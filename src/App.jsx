import {
    IconBrandFacebook,
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
                    <Button type='Submit'>
                        <IconLogin />
                        Login
                    </Button>
                    <Button>
                        <IconBrandFacebook />
                        Register
                    </Button>
                </div>
            </div>
        </div>
    );
}

function Button(props) {
    const { children, type, text } = props;
    return (
        <button
            type={type}
            className={
                '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            }
        >
            {text || children}
        </button>
    );
}
