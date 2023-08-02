function Card({ children }) {
    return <div className={'bg-white shadow rounded-lg overflow-hidden'}>{children}</div>;
}

function Title({ children }) {
    return (
        <div className={'p-4 border-b'}>
            <h1 className={'text-2xl font-semibold'}>{children}</h1>
        </div>
    );
}

function Body({ children }) {
    return <div className={'leading-relaxed p-4'}>{children}</div>;
}

function Footer({ children }) {
    return <div className={'bg-slate-50 p-4'}>{children}</div>;
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
