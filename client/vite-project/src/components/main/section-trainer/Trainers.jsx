export default function Trainers(
    _id,
    name,
    phone
) {

    return (

        <div className="row">
            <div className="col-lg-4 col-md-6 mx-auto">
                <div className="box">
                    <div className="name">
                        <h5>{name}</h5>
                    </div>
                    <div className="img-box">
                        <img src="images/t1.jpg" alt="" />
                    </div>
                    <div className="social_box">
                        <p>{phone}</p>
                    </div>
                </div>
            </div>


        </div>
    )
}