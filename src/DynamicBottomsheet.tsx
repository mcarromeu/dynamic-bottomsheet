import { useCallback, useRef, ReactElement, createElement } from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { DynamicBottomsheetProps } from "../typings/DynamicBottomsheetProps";
import { mergeNativeStyles, Style } from "@mendix/pluggable-widgets-tools";

export function DynamicBottomSheet(
    props: DynamicBottomsheetProps<Style>
): ReactElement<DynamicBottomsheetProps<Style>> {
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);

    // maximum height based on prop or default to 75% of screen height
    const maxHeight = props.maxHeight || Dimensions.get("window").height * 0.75;

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log("handleSheetChanges", index);
    }, []);

    const stylesNative = mergeNativeStyles(defaultStyles, props.style);

    // renders
    return (
        <GestureHandlerRootView style={[stylesNative.container]}>
            <BottomSheet
                enableOverDrag={props.enableOverDrag ?? true}
                enablePanDownToClose={props.enablePanDownToClose ?? true}
                enableDynamicSizing={props.enableDynamicSizing ?? true}
                maxDynamicContentSize={maxHeight}
                ref={bottomSheetRef}
                onChange={handleSheetChanges}
            >
                <BottomSheetScrollView
                    showsVerticalScrollIndicator={props.showsVerticalScrollIndicator ?? false}
                    contentContainerStyle={stylesNative.contentContainer}
                >
                    <Text style={stylesNative.textContent}>
                        {props.contentText || "Default content for bottom sheet."}
                    </Text>
                </BottomSheetScrollView>
            </BottomSheet>
        </GestureHandlerRootView>
    );
}

// Default styling applied to the component, which can be overridden by Mendix styles
const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey"
    },
    contentContainer: {
        flex: 1,
        padding: 36,
        alignItems: "center"
    },
    textContent: {
        fontSize: 16,
        color: "#000000"
    }
});
