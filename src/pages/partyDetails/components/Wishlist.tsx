import { Button } from "antd";
import { WishlistItem } from "../../../types/wishlistItem";

export interface IFormProps {
    wishlistItems: WishlistItem[]
}

export default function Wishlist(props: IFormProps) {

    return (
        <>
            <Button
                type="primary"
                className="button buttonInviteMore"
                size="middle"
            >
                ADD TO WISH LIST
            </Button>
            <div className="inviteesTab">
                {props.wishlistItems.map((wishlistItem) => {
                    return (
                        <div className="invitee" key={wishlistItem.id}>
                            
                            {wishlistItem.description}
                            <Button 
                                type="primary" 
                                className="buttonSmall rightAndCenter"
                            >
                                ME TOO
                            </Button>
                        </div>
                    )
                })}
            </div>
        </>
    );
}