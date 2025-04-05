import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from 'react';

interface DetailCardProps {
    title: string,
    id: string,
    contents: string,
    pretty?: boolean,
}

export const DetailCard: React.FC<DetailCardProps> = (props) =>
    (<Card>
        <CardHeader title={props.title} />
        <CardContent>
            <Typography
                align="justify"
                variant="inherit"
                color="textSecondary"
                paragraph={true}
                component={props.pretty ? "pre" : "p"}>
                    <code style={{overflowWrap: 'break-word'}} id={props.id}>{props.contents}</code>
            </Typography>
        </CardContent>
    </Card>);