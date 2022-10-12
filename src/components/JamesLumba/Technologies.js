import './Technologies.css';
import { SiHtml5, SiCss3, SiJavascript, SiMongodb, SiExpress, SiReact, SiVuedotjs, SiNodedotjs } from 'react-icons/si';

const Technologies = () => {
    return (
        <div className='Container' id='Technologies'>
            <section>
                <figure>
                    <SiHtml5 className='Logo' id='Html5' />
                    <figcaption>HTML</figcaption>
                </figure>
                <figure>
                    <SiCss3 className='Logo' id='Css3' />
                    <figcaption>CSS</figcaption>
                </figure>
                <figure>
                    <SiJavascript className='Logo' id='Javascript' />
                    <figcaption>JavaScript</figcaption>
                </figure>
            </section>
            <section>
                <figure>
                    <SiReact className='Logo' id='React' />
                    <figcaption>React</figcaption>
                </figure>
                <figure>
                    <SiVuedotjs className='Logo' id='Vue' />
                    <figcaption>Vue.js</figcaption>
                </figure>
            </section>
            <section>
                <figure>
                    <SiMongodb className='Logo' id='Mongodb' />
                    <figcaption>MongoDB</figcaption>
                </figure>
                <figure>
                    <SiExpress className='Logo' id='Express' />
                    <figcaption>Express.js</figcaption>
                </figure>
                <figure>
                    <SiNodedotjs className='Logo' id='Node' />
                    <figcaption>Node.js</figcaption>
                </figure>
            </section>
        </div>
    )
}

export default Technologies;