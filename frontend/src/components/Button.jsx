import { Button } from "@material-ui/core";

export const SimpleButton = ({children, disabled, onClick, margin}) => (
    <Button disabled={disabled} onClick={onClick} style={{ margin: typeof margin === 'string' || typeof margin ==='number' ? margin : 20 , backgroundColor: "#ffd23b", fontWeight: 700, borderRadius: 20 }}>
        {children}
    </Button>
);