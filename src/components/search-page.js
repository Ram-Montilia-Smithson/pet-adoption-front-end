import React, { useState, useEffect } from "react";
import { Button, Card, Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap"
import { getData} from "../api";


export default function Search() {

    const [allPets, setAllPets] = useState({})
    // const [searchedPets, setSearchedPets] = useState([])
    // const [searchTypeBasic, setSearchTypeBasic] = useState(true);
    const [searchData, setSearchData] = useState({})
    // const [type, setType] = useState("")
    // let basicPetArray
    // let advancedPetArray
    
    useEffect(() => {
        getData("http://localhost:5000/search").then((response) => {
            setAllPets(response.pets)
        })
        // return () => {cleanup}
    }, [])

    console.log(allPets)

    // const handleBasicSearch = (event) => {
        // basicPetArray = []
        // let type
        // if (event === 1) {type = "cat"}
        // else { type = "dog"}
        // allPets.forEach((pet) => {
            // if (pet.type === type
                // && !basicPetArray.includes(pet)
            // ) { basicPetArray.push(pet) }
        // })
        // setSearchedPets(basicPetArray)
        // console.log(basicPetArray)
        // console.log(searchedPets)
    // };

    const handleTypeChange = (event) => {
        if (event === 1) {setSearchData({ ...searchData, type: "cat" })}
        else {setSearchData({ ...searchData, type: "dog" })}
    };

    const handleStatusChange = (event) => {
        if (event === 1) {setSearchData({ ...searchData, status: "fostered" })}
        else if (event === 2) { setSearchData({ ...searchData, status: "owned" }) }
        else { setSearchData({ ...searchData, status: "sheltered" })}
    };

    // const handleAdvancedSearch = (event) => {
        // event.preventDefault();
        // advancedPetArray = []
        // allPets.forEach((pet) => {
            // for (const value in searchData) {
                // for (const prop in pet) {
                    // if (pet[prop] === searchData && !advancedPetArray.includes(pet))
                    // { advancedPetArray.push(pet) }
                // }
            // }
        // })
        // setSearchedPets(advancedPetArray)
        // console.log(advancedPetArray)
        // console.log(searchedPets)
        // setSearchData({ name: "", type: "", height: 0, weight: 0, status: "" })
    // }

    return (
        <>
            <Card className="d-flex align-items-center justify-content-center bg-transparent">
                <Card.Body>
                    <h2 className="text-center mb-4">Search Page</h2>
                    <Form
                        className="bg-light"
                        // onSubmit={(event) => handleAdvancedSearch(event)}
                    >
                        <Button
                            className="d-block m-auto"
                        //  onClick={() => setSearchTypeBasic(!searchTypeBasic)}
                        >
                            {/* {!searchTypeBasic ? "Basic" : "Advanced"} */}
                        </Button>
                        Results of search (List of animal card components that link to the pet page)
                        {/* <Card.Title>{searchTypeBasic ? "Basic" : "Advanced"} Search Form:</Card.Title> */}
                        {/* {searchTypeBasic ? */}
                        <Form.Group id="type">
                            <Form.Label className="d-block m-auto" >Pet's Type</Form.Label>
                            <ToggleButtonGroup
                                type="radio"
                                name="types"
                                // onChange={(event) => handleBasicSearch(event)}
                            >
                                <ToggleButton value={1}>cat</ToggleButton>
                                <ToggleButton value={2}>dog</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>
                            :
                        <>
                        <Form.Group id="pet's-Name">
                            <Form.Label>Pet's Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                onChange={(event) => setSearchData({ ...searchData, name: event.target.value })}
                            />
                        </Form.Group>        
                        <Form.Group id="type">
                            <Form.Label>Pet's Type</Form.Label>
                            <ToggleButtonGroup
                                type="radio"
                                name="types"
                                onChange={(event) => handleTypeChange(event)}
                            >
                                <ToggleButton value={1}>cat</ToggleButton>
                                <ToggleButton value={2}>dog</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>
                        <Form.Group id="status">
                            <Form.Label> Adoption Status</Form.Label><br />
                            <ToggleButtonGroup
                                type="radio"
                                name="types"
                                onChange={(event) => handleStatusChange(event)}
                            >
                                <ToggleButton value={1}>Fostered</ToggleButton>
                                <ToggleButton value={2}>Owned</ToggleButton>
                                <ToggleButton value={3}>Sheltered</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>
                        <Form.Group id="height">
                            <Form.Label>Height</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Height"
                                onChange={(event) => setSearchData({ ...searchData, height: event.target.value })}
                            />
                        </Form.Group>
                        <Form.Group id="weight">
                            <Form.Label>Weight</Form.Label>
                            <Form.Control    
                                type="number"
                                placeholder="weight"
                                onChange={(event) => setSearchData({ ...searchData, weight: event.target.value })}
                            />
                        </Form.Group>
                        <Button type="submit">Search</Button>        
                        </>
                        }
                    </Form>
                </Card.Body>
            </Card>
            show ten results of pet cards
            {/* {console.log(basicPetArray)} */}
            {/* {basicPetArray || advancedPetArray ?  */}
            <>
            <h2 className="text-center mb-4">Search Results</h2>
            {/* {searchedPets.forEach(pet => { */}
                {/* // console.log(pet.id); */}
                {/* // return( */}
                {/* // <div key={pet.id}> */}
                    {/* <Card className="align-items-center justify-content-center bg-transparent"> */}
                        {/* <Card.Body> */}
                            {/* <Card.Img src="../images" alt="image of the pet" /> */}
                            {/* <Card.Title>{pet.name}</Card.Title> */}
                            {/* <Card.Subtitle className="mb-2 text-muted">{pet.status}</Card.Subtitle> */}
                            {/* <Button variant="primary">See More</Button> */}
                        {/* </Card.Body> */}
                    {/* </Card> */}
                    {/* </div> */}
                {/* // ) */}
            {/* // })} */}
            </>
            {/* : */}
            <></>
            {/* } */}
        </>
    );
}