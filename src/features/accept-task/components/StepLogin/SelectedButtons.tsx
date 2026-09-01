import { Key, MagicWand } from "@gravity-ui/icons";
import { Button } from "@heroui/react";

type TypeLogin = "login" | "autologin";

interface ButtonTypeLogin {
    key: TypeLogin;
    label: string;
    icon: typeof Key;
}

const ButtonsTypeLogin: ButtonTypeLogin[] = [
    { key: "autologin", label: "Sesion automatica", icon: MagicWand },
    { key: "login", label: "Ingresar credenciales", icon: Key },
];

interface SelectedButtonsProps {
    onPress: (value: "login" | "autologin") => void;
    typeLogin: "login" | "autologin";
}

export default function SelectedButtons({ onPress, typeLogin }: SelectedButtonsProps) {
    return (
        <div className="flex gap-3 rounded-large bg-default-100 my-8">
            {ButtonsTypeLogin.map(({ key, label, icon: Icon }) => {
                const isSelected = typeLogin === key;
                return (
                    <Button
                        key={key}
                        variant={isSelected ? "primary" : "outline"}
                        className="flex-1 rounded-xl"
                        onPress={() => onPress(key)}
                    >
                        <Icon width={16} height={16} />
                        {label} 
                    </Button>
                );
            })}
        </div>
    );
}