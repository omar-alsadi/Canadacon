import React from "react";
import { useStateValue } from './StateProvider';
import { Btn } from './styles/SignIn.style';
import { CommentsWrapper, InputText, User, UserComment , Comment, CommentDetails, CommentDate } from "./styles/Comments.style"
import { UserName, UserPhoto } from "./styles/UserNav.style";


const Comments = () => {

    const [{ isEnglish, currentUser }, dispatch] = useStateValue()

    return (
        <>
            Comments & Reviwes :
            
            { currentUser ?
                <form css={`width: 80%;`}>
                <InputText placeholder="Write your comments" cols="10" rows="2" />
                <Btn google='true' round='true' type='submit'>Submit</Btn>
                </form>
                :
                <InputText placeholder="Please, sign In to write your comment" cols="5" rows="1" disabled />
            }

            <CommentsWrapper>
                <UserComment>
                    <User>
                        <UserPhoto />
                        <CommentDetails>
                        <UserName css={`font-weight: bold;`}>User</UserName>
                        <CommentDate>21/01/2021</CommentDate>
                        </CommentDetails>
                    </User>
                    <Comment>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae tenetur pariatur sint aspernatur reiciendis eligendi recusandae odit qui a id voluptate explicabo dolor,
                        nulla vitae quo inventore eveniet debitis dicta.</Comment>
                </UserComment>

                <UserComment>
                    <User>
                        <UserPhoto />
                        <CommentDetails>
                        <UserName css={`font-weight: bold;`}>User</UserName>
                        <CommentDate>21/01/2021</CommentDate>
                        </CommentDetails>
                    </User>
                    <Comment>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae tenetur pariatur sint aspernatur reiciendis eligendi recusandae odit qui a id voluptate explicabo dolor,
                        nulla vitae quo inventore eveniet debitis dicta.</Comment>
                </UserComment>

                <UserComment>
                    <User>
                        <UserPhoto />
                        <CommentDetails>
                            <UserName css={`font-weight: bold;`}>User</UserName>
                            <CommentDate>21/01/2021</CommentDate>
                        </CommentDetails>
                    </User>
                    <Comment>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae tenetur pariatur sint aspernatur reiciendis eligendi recusandae odit qui a id voluptate explicabo dolor,
                        nulla vitae quo inventore eveniet debitis dicta.</Comment>
                </UserComment>

            </CommentsWrapper>

        </>
    )

}


export default Comments