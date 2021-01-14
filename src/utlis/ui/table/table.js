import React from 'react'
import styles from './table.module.css'
import { Loader } from '../index'

export const Table = (props) => {

    let table = null
    let tableRows = null
    let tableHeads = null
    
    if (props.tableData) {
        let headname = props.tableData.slice(0,1)
        tableHeads = headname.map(Obj => {
            let thArr = []
            function genRow(){
                for(const key in Obj){
                    let th = <th key={key}>{key}</th>
                    thArr.push(th)
                }
            }
            genRow()
            let head =  <tr key={Obj.id}>
                { 
                    thArr
                }
            </tr>
            return head

        })
        tableRows = props.tableData.map(Obj => {
            let tdArr = []
            function genRow(){
                for(const key in Obj){
                    let td = <td key={key}>{Obj[key]}</td>
                    tdArr.push(td)
                }
            }
            genRow()
            let body =  <tr key={Obj.id}>
                { 
                    tdArr
                }
            </tr>
            return body

        })
        table = <table className={styles.Table}>
            <thead>
                {tableHeads}
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    }
    else {
        table = <Loader />
    }
    return (
        <div className={styles.TableContent}>
            {table}
        </div>
    )
}


