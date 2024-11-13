import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="flex justify-between md:max-w-[1170px] max-h-[554px] bg-[#1313130D] rounded-3xl"> 
                <div className="flex justify-center items-center flex-col h-screen">
                    <h3 className="text-3xl font-extrabold">Books to freshen up your bookshelf</h3>
                    <Link to="/Listedbooks.jsx" className="btn btn-primary" >View The List</Link>
                </div>
                <div className="flex justify-center items-center flex-col h-screen"> 
                    <img src='https://i.ibb.co.com/PG89qrR/book-png.png' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;