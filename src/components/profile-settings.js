import UserContext from "../context/context"
import { Form, Button, Card} from "react-bootstrap";
import React, { useContext } from "react"



function ProfileSettings() {

    const userContext = useContext(UserContext)


    return (
        <Card className="d-flex align-items-center justify-content-center bg-transparent">
            <Card.Body>
                <h2 className="text-center mb-4">Profile Settings</h2>
                {userContext.admin && <h3>Admin</h3>}
                <Form>
                    <Form.Group id="first-name">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder={userContext.firstName} type="text" required />
                    </Form.Group>
                    <Form.Group id="last-name">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder={userContext.lastName} type="text" required />
                    </Form.Group>
                    <Form.Group id="tel">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control placeholder={userContext.tel} type="tel" required />
                    </Form.Group>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder={userContext.email} type="email" required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required />
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" required />
                    </Form.Group>
                    <Form.Group id="bio">
                        <Form.Label>Bio textarea</Form.Label>
                        <Form.Control placeholder={userContext.bio} as="textarea" rows={3} />
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