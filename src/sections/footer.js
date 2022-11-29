import { GithubOutlined } from '@ant-design/icons';
import { LinkedinOutlined } from '@ant-design/icons';

const onSocialClick = (msg) => {
    //console.log(msg);
}

export const Foot = () =>{
    return (
        <div className={'center'} >
            <div className={'socialImage'} onClick={() =>onSocialClick("twitter")} >
                <a href="https://github.com/DavidFuentes4224">
                    <GithubOutlined style={{marginRight:'10px'}} /> 
                    Github 
                </a>
            </div>
            <div className={'socialImage'} onClick={() =>onSocialClick("facebook")} >
                <a href="https://www.linkedin.com/in/david-fuentes-7aa01995/">
                    <LinkedinOutlined style={{marginRight:'10px'}} /> 
                    Linkedin 
                </a>
            </div>
        </div>
      );
}