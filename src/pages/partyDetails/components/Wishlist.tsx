import { Button } from "antd";
import { WishlistItem } from "../../../types/wishlistItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCalendarDays, faNoteSticky } from '@fortawesome/free-solid-svg-icons';

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
            <div className="listContainer">
                {props.wishlistItems.map((wishlistItem) => {
                    return (
                        <div className="listItem" key={wishlistItem.id}>
                            <FontAwesomeIcon icon={faLocationDot} fontSize="35px" />
                            <span>{wishlistItem.description}</span>
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