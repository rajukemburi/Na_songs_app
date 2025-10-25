import img1 from "../assets/images/img_1.jpg"
import img2 from "../assets/images/Dude-2025-Baagundu-Po-250x250.jpg"
import img3 from "../assets/images/K-Ramp-2025-250x250.jpg"
import img4 from "../assets/images/Kingdom-Telugu-2025-Ragile-Ragile-250x250.jpg"
import img5 from "../assets/images/Mirai-2025-Sri-Rama-Sambhavam-250x250.jpg"
import movie_data from "../assets/json_data/data.json"
import audio1 from "../assets/audios/[iSongs.info] 02 - Meesaala Pilla.mp3"
import audio2 from "../assets/audios/[iSongs.info] 01 - Boom Boom.mp3"
import audio3 from "../assets/audios/[iSongs.info] 01 - K Ramp Glimpse OST.mp3"
import audio4 from "../assets/audios/[iSongs.info] 04 - Ragile Ragile.mp3"
import audio5 from "../assets/audios/[iSongs.info] 06 - The Mother Song.mp3"
import video from "../assets/videos/0ce3f238-eb9b-4193-89a0-de3e325ff068_video_v2_360.mp4"
import video1 from "../assets/videos/a84d75b9-fa44-40c5-9b25-2e03ea83cd78_video_v2_360.mp4"






export const Main = () => {
    return (
        <>
            <div style={{ backgroundColor: "brown", height: "450px", borderRadius: "20px", paddingTop: "50px", padding: "40px 30px 20px 30px", boxShadow: "0px 0px 10px black", marginTop: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", height: "150px", padding: "20px", borderRadius: "20px", backgroundColor: "white", paddingLeft: "15px", boxShadow: "0px 0px 10px black" }}>
                    <img src={img1} alt="" style={{ borderRadius: "15px" }} />
                    <img src={img2} alt="" style={{ borderRadius: "15px" }} />
                    <img src={img3} alt="" style={{ borderRadius: "15px" }} />
                    <img src={img4} alt="" style={{ borderRadius: "15px" }} />
                    <img src={img5} alt="" style={{ borderRadius: "15px" }} />
                    {/* <img src="vite.svg" alt="" /> */}
                </div>
                <div >
                    <ul style={{ display: "flex", justifyContent: "space-between", marginRight: "60px" }}>{movie_data.map((value, index) =>
                        <div key={index}><li><h3>Movie:{value.moviename}</h3><h5>Song:{value.song}</h5></li></div>)}</ul>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "white", height: "60px", paddingTop: "15px", paddingLeft: "35px", paddingRight: "50px", borderRadius: "20px", width: "1380px", boxShadow: "0px 0px 10px black" }}>
                    <audio src={audio1} controls autoPlay muted loop style={{ height: "40px", width: "200px", boxShadow: "0px 0px 10px black", borderRadius: "20px" }}></audio>
                    <audio src={audio2} controls autoPlay muted loop style={{ height: "40px", width: "200px", boxShadow: "0px 0px 10px black", borderRadius: "20px" }}></audio>
                    <audio src={audio3} controls autoPlay muted loop style={{ height: "40px", width: "200px", boxShadow: "0px 0px 10px black", borderRadius: "20px" }}></audio>
                    <audio src={audio4} controls autoPlay muted loop style={{ height: "40px", width: "200px", boxShadow: "0px 0px 10px black", borderRadius: "20px" }}></audio>
                    <audio src={audio5} controls autoPlay muted loop style={{ height: "40px", width: "200px", boxShadow: "0px 0px 10px black", borderRadius: "20px" }}></audio>
                    {/* <audio src="Boom Boom.mp3" controls loop autoPlay muted></audio> */}
                </div>

            </div>
            <div style={{ display: "flex", gap: "40px", justifyContent: "space-between", backgroundColor: "smokewhite", height: "400px", padding: "25px", width: "1455px", marginTop: "45px", marginLeft: "5px", marginRight: "55px", borderRadius: "20px", boxShadow: "0px 0px 10px black" }}>
                <video src={video} controls autoPlay muted loop style={{ borderRadius: "20px", boxShadow: "0px 0px 10px black" }}></video>
                <video src={video1} controls autoPlay muted loop style={{ borderRadius: "20px", boxShadow: "0px 0px 10px black" }}></video>
            </div>




        </>
    )
}
