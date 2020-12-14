// Components:
// Form with the following fields: user can add a short bio.
// Save button to save any changes done

import { Form, Button, Card} from "react-bootstrap";



function ProfileSettings() {
    return (
        <Card className="d-flex align-items-center justify-content-center bg-transparent">
            <Card.Body>
                <h2 className="text-center mb-4">Profile Settings</h2>
                <Form>
                    <Form.Group id="first-name">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" required />
                    </Form.Group>
                    <Form.Group id="last-name">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" required />
                    </Form.Group>
                    <Form.Group id="phone-number">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" required />
                    </Form.Group>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required />
                    </Form.Group>
                    <Form.Group id="textarea">
                        <Form.Label>Bio textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button className="w-100" type="submit">
                        save changes
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
export default ProfileSettings