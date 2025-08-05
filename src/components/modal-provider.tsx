import {
	createContext,
	useCallback,
	useContext,
	useState,
	type ReactNode,
} from "react";

// Define the context shape
interface ModalContextType {
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
}

// Create the context
const ModalContext = createContext<ModalContextType | null>(null);

// Provider component
export const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = useCallback(() => {
		setIsOpen(true);
	}, []);

	const closeModal = useCallback(() => {
		setIsOpen(false);
	}, []);

	return (
		<ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
			{children}
		</ModalContext.Provider>
	);
};

// Hook to use modal context
export const useModalContext = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error("useModalContext must be used within ModalProvider");
	}
	return context;
};
