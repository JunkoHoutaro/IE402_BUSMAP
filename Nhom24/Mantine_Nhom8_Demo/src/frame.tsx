import React from "react";
import { AppShell } from "@mantine/core";
import { HeaderMegaMenu } from "./components/Header/HeaderMegaMenu";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { FooterCentered } from "./components/Footer/FooterCentered";

export function Frame(){
 return(
    <AppShell>
        <AppShell.Header pt={10}>
            <HeaderMegaMenu/>
        </AppShell.Header>
        <AppShell.Main m={100}>
            <ContactUs/>
        </AppShell.Main>
            <FooterCentered/>
    </AppShell>
 );
};