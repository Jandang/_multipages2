
import './Home.css';

function Home() {
    return (   
        <div className='home-container'>
            <div className="home-image"></div>
            <div className="home-text">
                <p style={{textAlign: 'left'}}> 
                    ชื่อ: นางสาวสิราวรรณ จันแดง<br />
                    อายุ: 20 ปี <br />
                    นักศึกษาชั้นปีที่ 2 <br />
                    สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ <br />
                    คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม <br />
                    ทักษะ: HTML, CSS, JavaScript <br />
                    งานอดิเรก: ฟังเพลง, วาดรูป <br />
                    เป้าหมาย: Full Stack Developer {/*ถูกหวย*/}
                </p>
            </div>
        </div> 
    );
}

export default Home;