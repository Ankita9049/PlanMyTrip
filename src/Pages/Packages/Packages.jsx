import { useEffect, useState } from "react";
import "./Packages.css";
import PackageCard from "../../components/PackageCard";
import { getAllPackages } from "../../services/PackageService";
import {Loader} from "../../components/Loader";


function Packages() {


    const [search, setSearch] = useState("");
    const [budget, setBudget] = useState("");

    const [packages, setPackages] = useState([]);
    const [filteredPackages, setFilteredPackages] = useState([]);

    const [loading, setLoading] = useState(true);



    useEffect(() => {

        loadPackages();

    }, []);



    // Load packages from backend

    const loadPackages = async () => {


        try {


            setLoading(true);


            const data = await getAllPackages();


            setPackages(data);

            setFilteredPackages(data);



        } catch(error) {


            console.error(error);

            alert("Unable to load packages.");


        } finally {


            setLoading(false);


        }


    };





    // Search and filter function

    const handleSearch = () => {


        const result = packages.filter((tour) => {



            const destination =

                tour.destination
                ? tour.destination.toLowerCase()
                : "";



            const matchDestination =

                search.trim() === "" ||

                destination.includes(
                    search.toLowerCase()
                );




            const matchBudget =

                budget === "" ||

                Number(tour.price) <= Number(budget);




            return matchDestination && matchBudget;



        });



        setFilteredPackages(result);



    };






    // Instant search

    useEffect(() => {


        handleSearch();


    }, [search, budget]);






    // Reset filter

    const resetSearch = () => {


        setSearch("");

        setBudget("");

        setFilteredPackages(packages);


    };






    if(loading){

        return <Loader/>;

    }






    return (



        <div className="packages-page">



            <div className="container">





                <div className="page-header">


                    <h1>
                        Explore Tour Packages
                    </h1>



                    <p>
                        Find your perfect destination with smart search.
                    </p>



                </div>







                {/* Search Box */}



                <div className="search-filter-box">





                    <div className="row g-3">






                        <div className="col-lg-5">



                            <input


                                type="text"


                                className="form-control"


                                placeholder="Search Destination"


                                value={search}


                                onChange={(e)=>
                                    setSearch(e.target.value)
                                }


                            />



                        </div>









                        <div className="col-lg-5">



                            <input


                                type="number"


                                className="form-control"


                                placeholder="Maximum Budget"


                                value={budget}


                                onChange={(e)=>
                                    setBudget(e.target.value)
                                }


                            />



                        </div>









                        <div className="col-lg-2">



                            <button


                                className="btn btn-primary w-100"


                                onClick={handleSearch}


                            >

                                🔍 Search


                            </button>



                        </div>






                    </div>







                    <button


                        className="btn btn-outline-secondary mt-3"


                        onClick={resetSearch}


                    >

                        Reset Filters


                    </button>






                </div>









                {/* Package Cards */}





                <div className="row mt-4">





                    {

                    filteredPackages.length > 0 ?



                    (



                        filteredPackages.map((tour)=>(





                            <div


                                className="col-lg-4 col-md-6 mb-4"


                                key={tour.packageId}



                            >





                                <PackageCard tour={tour}/>






                            </div>






                        ))





                    )





                    :





                    (



                        <div className="text-center mt-5">



                            <h4>

                                No Packages Found 😔

                            </h4>



                        </div>




                    )





                    }





                </div>






            </div>






        </div>



    );


}



export default Packages;