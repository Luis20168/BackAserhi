import pool from "../db.js";



export const getRoles=async(req, res)=>{
    const roles= await pool.query('SELECT * FROM roles')
    res.json(roles.rows)
}

export const registerRoles= async(req, res,next)=>{
    const {nombre_rol}= req.body;

    try {
        await pool.query('INSERT INTO roles (nombre_rol) VALUES ($1)',
        [nombre_rol])
        res.send("Rol Agregado")
        
    } catch (error) {
        next(error)
        
    }
    
    
}

export const deleteRoles=async(req, res,next)=>{
    const {id}=req.params

    try {
        const rol= await pool.query('DELETE FROM roles WHERE _id= $1' , [id])

        if(rol.rowCount===0){
            return res.status(404).json({message: 'Not fount'})


        }
        
        return res.sendStatus(204)
        
    } catch (error) {
        next(error)
        
    }
}