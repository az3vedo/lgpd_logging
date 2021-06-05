
const Logs = ({ doTheL }) => {
    window.console.log(doTheL);

    return (
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>DADOS</td>
                    <td>ADM ID</td>
                    <td>ADM GOOGLE ID</td>
                    <td>ADM EMAIL</td>
                    <td>ADM NOME</td>
                    <td>ADM FOTO</td>
                    <td>AÇÃO</td>
                    <td>TABELA DA AÇÃO</td>
                    <td>DATA/HORA DA AÇÃO</td>
                </tr>
            </thead>
            <tbody>
                {!!doTheL && doTheL.length > 0 && doTheL.map(l =>
                (
                    <tr>
                        <td>{l.id}</td>
                        <td>{l.dados}</td>
                        <td>{l.adminId.id}</td>
                        <td>{l.adminId.googleId}</td>
                        <td>{l.adminId.email}</td>
                        <td>{l.adminId.nome}</td>
                        <td><img src={l.adminId.urlFoto} /></td>
                        <td>{l.acao}</td>
                        <td>{l.tabelaAcao}</td>
                        <td>{l.dataHora}</td>
                    </tr>
                )
                )}
            </tbody>
        </table>
    )
}

export default Logs;