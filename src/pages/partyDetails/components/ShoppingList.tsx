import { Checkbox } from "antd";
import { WishlistItem } from "../../../types/wishlistItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export interface IFormProps {
    wishlistItems: WishlistItem[]
}

export default function ShoppingList(props: IFormProps) {
    return (
        <div className="tabContent">
            {props.wishlistItems.map((wishlistItem) => {
                return (
                    <div className="wishlistListItem" key={wishlistItem.id}>
                        <span className="shoppinglistItemQuantity">
                            <span>{wishlistItem.quantity}</span>
                            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                        </span>
                        <img className="picture" src={"../" + wishlistItem.icon} />
                        <span className="wishlistItemDescription">{wishlistItem.description}</span>
                        <Checkbox className="boughtCheckbox"/>
                    </div>
                )
            })}
        </div>
    );
}