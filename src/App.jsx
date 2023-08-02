import Button from './components/Button';
import Card from './components/Card';

function App() {
    return (
        <div>
            <div className={'bg-slate-100 antialiased tracking-tighter flex items-center justify-center min-h-screen'}>
                <div className='max-w-md flex items-center gap-4 w-full'>
                    <Card>
                        <Card.Title>Hello React</Card.Title>
                        <Card.Body>
                            Elit incididunt officia sint reprehenderit excepteur. Fugiat dolor fugiat aliqua do adipisicing. Nostrud consequat elit et
                            consectetur. Aute nulla laboris culpa amet mollit minim. Consequat ad quis ullamco ut proident aute proident duis sint
                            consectetur.
                        </Card.Body>
                        <Card.Footer>
                            <Button>Load More</Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Title>Hello React</Card.Title>
                        <Card.Body>
                            Elit incididunt officia sint reprehenderit excepteur. Fugiat dolor fugiat aliqua do adipisicing. Nostrud consequat elit et
                            consectetur. Aute nulla laboris culpa amet mollit minim. Consequat ad quis ullamco ut proident aute proident duis sint
                            consectetur.
                        </Card.Body>
                        <Card.Footer>
                            <Button>Load More</Button>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default App;
