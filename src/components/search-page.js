import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

export default function Search() {

    const [searchType, setSearchType] = useState(true);


    return (
        <>
            <Card className="d-flex align-items-center justify-content-center bg-transparent">
                <Card.Body>
                    <h2 className="text-center mb-4">Search Page</h2>
                    <Form>
                        Results of search (List of animal card components that link to the pet page)
                        <label>search</label><br />
                        <Button onClick={() => setSearchType(!searchType)}>{!searchType ? "Basic":"Advanced"}</Button>
                        {searchType ?
                        <Form.Group id="type">
                            <Form.Label>type of pet(dog, cat)</Form.Label>
                            <Form.Control type="text" />
                            <Button>Search</Button>
                        </Form.Group>
                                    :
                        < Form.Group >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" />
                                    
                            <Form.Label>type of pet(dog, cat)</Form.Label>
                            <Form.Control type="text" />
                                    
                            <Form.Label>Adoption Status</Form.Label>
                            <Form.Control type="text" />
                                    
                            <Form.Label>Height</Form.Label>
                            <Form.Control type="number" />
                                    
                            <Form.Label>Weight</Form.Label>
                            <Form.Control type="number" />
                            <Button>Search</Button>
                        </Form.Group>
                        }
                    </Form>
            show ten results of pet cards
                </Card.Body>
            </Card>
        </>
    );
}