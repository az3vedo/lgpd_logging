import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";

const StyledTableCellHId = ({children}) => <TableCell size="small" style={{width: 50,height: 50, lineBreak: "auto" }}>{children}</TableCell>
const StyledTableCellId = ({children}) => <TableCell size="small" style={{width: 50,height: 100, lineBreak: "auto" }}>{children}</TableCell>
const StyledTableCellHeader = ({children}) => <TableCell size="small" style={{width: 120,height: 50, lineBreak: "auto" }}>{children}</TableCell>
const StyledTableCell = ({children}) => <TableCell size="small" style={{width: 120,height: 100, lineBreak: "anywhere" }}>{children}</TableCell>
const Logs = ({ doTheL }) => {
    window.console.log(doTheL);
    return (
        <Paper style={{ width: 'max-content', marginTop: 30 }}>
            <TableContainer style={{ height: '440px' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow style={{display: 'flex'}}>
                            <StyledTableCellHId>ID</StyledTableCellHId>
                            <StyledTableCellHeader>DADOS</StyledTableCellHeader>
                            <StyledTableCellHId>ADM ID</StyledTableCellHId>
                            <StyledTableCellHeader>ADM GOOGLE ID</StyledTableCellHeader>
                            <StyledTableCellHeader>ADM EMAIL</StyledTableCellHeader>
                            <StyledTableCellHeader>ADM NOME</StyledTableCellHeader>
                            <StyledTableCellHeader>ADM FOTO</StyledTableCellHeader>
                            <StyledTableCellHeader>AÇÃO</StyledTableCellHeader>
                            <StyledTableCellHeader>TABELA DA AÇÃO</StyledTableCellHeader>
                            <StyledTableCellHeader>DATA/HORA DA AÇÃO</StyledTableCellHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {!!doTheL && doTheL.length > 0 && doTheL.map(l =>
                        (
                            <TableRow style={{display: 'flex'}}>
                                <StyledTableCellId>{l.id}</StyledTableCellId>
                                <StyledTableCell>{l.dados}</StyledTableCell>
                                <StyledTableCellId>{l.adminId.id}</StyledTableCellId>
                                <StyledTableCell>{l.adminId.googleId}</StyledTableCell>
                                <StyledTableCell>{l.adminId.email}</StyledTableCell>
                                <StyledTableCell>{l.adminId.nomeCompleto}</StyledTableCell>
                                <StyledTableCell><img src={l.adminId.urlFoto} /></StyledTableCell>
                                <StyledTableCell>{l.acao}</StyledTableCell>
                                <StyledTableCell>{l.tabelaAcao}</StyledTableCell>
                                <StyledTableCell>{l.dataHora}</StyledTableCell>
                            </TableRow>
                        )
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default Logs;