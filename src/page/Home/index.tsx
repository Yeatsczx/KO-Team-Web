import React, {FC} from "react";
import styles from './index.scss'


const Home: FC = () => {

    return (
        <div>
            <div style={{position: "relative", height: "400px"}}>
                <div className={styles.video_txt}>
                    <div>
                        <img className={styles.video_txt_img}
                             src="https://img.cdn.sugarat.top/mdImg/MTY1MDM3NjgxNzExMA==650376817110"
                             style={{opacity: 1}}/>
                        <div className={styles.video_content}>
                            <div className={styles.video_txt_line} style={{opacity: 1}}></div>
                            <p className={styles.font_14} style={{opacity: 1}}>团队服务平台</p>
                        </div>
                    </div>
                    <video className={styles.video_source} autoPlay={true} loop={true} height="381" width="1920">
                        <source src="https://storage.360buyimg.com/jdrd-misc/index/video/video.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className={styles.reduce}>
                <i className={styles.icon}>
                    <svg className="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="26483" width="20" height="20">
                        <path
                            d="M938.666667 646.656c0 37.262222-7.025778 72.248889-21.048889 105.045333a271.587556 271.587556 0 0 1-142.648889 144.327111 256 256 0 0 1-103.822222 21.304889 256 256 0 0 1-103.822223-21.304889 271.587556 271.587556 0 0 1-142.620444-144.327111 264.362667 264.362667 0 0 1-21.048889-105.045333c0-37.205333 7.025778-72.248889 21.048889-105.045333a269.511111 269.511111 0 0 1 57.514667-85.617778A275.626667 275.626667 0 0 1 567.352889 398.222222a256.028444 256.028444 0 0 1 103.822222-21.304889c36.778667 0 71.395556 7.111111 103.822222 21.304889a275.626667 275.626667 0 0 1 85.105778 57.742222 269.454222 269.454222 0 0 1 57.514667 85.617778 264.305778 264.305778 0 0 1 21.048889 105.045334z m-598.613334 13.255111H120.263111c-16.213333 0-26.965333-6.144-32.284444-18.460444-5.290667-12.288-2.645333-26.652444 7.964444-43.036445 5.603556-9.472 16.668444-27.306667 33.194667-53.475555 16.497778-26.168889 35.384889-56.149333 56.604444-89.912889l66.844445-106.467556c23.409778-37.233778 45.226667-71.765333 65.479111-103.623111 20.280889-31.857778 37.432889-58.993778 51.456-81.408 14.023111-22.385778 22.613333-35.783111 25.713778-40.220444 6.855111-10.097778 15.928889-15.616 27.136-16.554667 11.207111-0.938667 21.191111 5.831111 29.923555 20.337778 9.955556 16.412444 22.471111 35.982222 37.404445 58.680889 14.961778 22.727111 29.297778 44.174222 43.036444 64.369777 16.213333 24.604444 32.711111 49.208889 49.578667 73.813334a256.768 256.768 0 0 0-57.059556 19.882666c-16.839111 8.192-35.697778 19.712-56.604444 34.531556-20.878222 14.819556-41.614222 34.531556-62.179556 59.164444-20.593778 25.230222-35.697778 50.773333-45.368889 76.629334-9.671111 25.884444-16.071111 49.863111-19.171555 71.936a294.200889 294.200889 0 0 0-1.877334 73.813333z"
                            fill="#d81e06" p-id="26484"></path>
                        <path
                            d="M340.053333 659.911111H120.263111c-16.213333 0-26.965333-6.144-32.284444-18.460444-5.290667-12.288-2.645333-26.652444 7.964444-43.036445 5.603556-9.472 16.668444-27.306667 33.194667-53.475555 16.497778-26.168889 35.384889-56.149333 56.604444-89.912889l66.844445-106.467556c23.409778-37.233778 45.226667-71.765333 65.479111-103.623111 20.280889-31.857778 37.432889-58.993778 51.456-81.408 14.023111-22.385778 22.613333-35.783111 25.713778-40.220444 6.855111-10.097778 15.928889-15.616 27.136-16.554667 11.207111-0.938667 21.191111 5.831111 29.923555 20.337778 9.955556 16.412444 22.471111 35.982222 37.404445 58.680889 14.961778 22.727111 29.297778 44.174222 43.036444 64.369777 16.213333 24.604444 32.711111 49.208889 49.578667 73.813334a256.768 256.768 0 0 0-57.059556 19.882666c-16.839111 8.192-35.697778 19.712-56.604444 34.531556-20.878222 14.819556-41.614222 34.531556-62.179556 59.164444-20.593778 25.230222-35.697778 50.773333-45.368889 76.629334-9.671111 25.884444-16.071111 49.863111-19.171555 71.936a294.200889 294.200889 0 0 0-1.877334 73.813333z"
                            fill="#d81e06" p-id="26485"></path>
                    </svg>
                </i>
                <div>
                    <span>KO-Team 致力于打造一站式服务平台</span>
                    <p>KO-Team 重在维护和创造团队氛围技术而存在,帮助同学更快、更便捷了解团队、感受浓烈的团队氛围。我们后续会持续上线一系列KO系统，敬请期待......</p>
                </div>
            </div>
        </div>
    )
}

export default Home
