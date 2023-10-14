import { useEffect, useState } from 'react';

import { EmojiEmotions, AttachFile, Mic } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import { Box, styled, InputBase } from '@mui/material';

import { uploadFile } from '../../../service/api';


const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    &  > * {
        margin: 5px;
        color: #919191;
    }
`;
const PreviewContainer = styled(Box)`
    height: 220px;
    padding: 12px;
    border-radius: 12px;
    position: absolute;
    bottom: 80px;
    background: #00bfa5;
    width: fit-content;
    &  > button {
        position:absolute;
        bottom: 20px;
        right: 20px;
    }
`;

const Search = styled(Box)`
    border-radius: 18px;
    background-color: #FFFFFF;
    width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    padding-left: 25px;
    font-size: 14px;
    height: 20px;
    width: 100%;
`;

const ClipIcon = styled(AttachFile)`
    transform: 'rotate(40deg)'
`;


const Footer = ({ sendText, sendMedia, setValue, value, setFile, file, setImage }) => {

    const [previewURL, setPreviewURL] =  useState();

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                setPreviewURL(URL.createObjectURL(file));

                const response = await uploadFile(data);
                setImage(response.data);
            }
        }
        getImage();
    }, [file])

    const onFileChange = (e) => {
        setValue(e.target.files[0].name);
        setFile(e.target.files[0]);
    }

    return (
        <Container>
            <EmojiEmotions />
            <label htmlFor="fileInput">
                <ClipIcon />
            </label>
            <input
                type='file'
                id="fileInput"
                style={{ display: 'none' }}
                onChange={(e) => onFileChange(e)}
            />
            {file &&
            <PreviewContainer>
                <img src={previewURL} alt="preview" title="Your file input" style={{maxHeight: "100%"}}/>
                <button onClick={(e)=>sendMedia(e)}><SendIcon/></button>
            </PreviewContainer>}
            <Search>
                <InputField
                    placeholder="Type a message"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={(e) => sendText(e)}
                    value={value}
                />
            </Search>
            <Mic />
            
        </Container>
    )
}

export default Footer;