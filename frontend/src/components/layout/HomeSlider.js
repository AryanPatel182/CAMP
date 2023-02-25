import { Carousel } from 'antd';
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const HomeSlider = () => (
    <Carousel effect="fade" autoplay={true}>
        <div>
            <h3 style={contentStyle}>
                <img src="https://www.w3schools.com/images/w3schools_green.jpg"/>
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>2</h3>
        </div>
        <div>
            <h3 style={contentStyle}>3</h3>
        </div>
        <div>
            <h3 style={contentStyle}>4</h3>
        </div>
    </Carousel>
);
export default HomeSlider;