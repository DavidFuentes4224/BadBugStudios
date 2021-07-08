import { TwitterOutlined } from '@ant-design/icons';
import { FacebookOutlined } from '@ant-design/icons';
import { InstagramOutlined } from '@ant-design/icons';

const onSocialClick = (msg) => {
    console.log(msg);
}

export const Foot = () =>{
    return (
        <div className={'center'} >
        <div className={'socialImage'} onClick={() =>onSocialClick("twitter")} >
            <TwitterOutlined style={{marginRight:'10px'}} />
            Twitter
        </div>
        <div className={'socialImage'} onClick={() =>onSocialClick("facebook")} >
            <FacebookOutlined style={{marginRight:'10px'}} />
            Facebook
        </div>
        <div className={'socialImage'} onClick={() =>onSocialClick("insta")} >
            <InstagramOutlined style={{marginRight:'10px'}} />
            Instagram
        </div>
        </div>
        
      );
}