import { Request, Response } from 'express';

import { User } from '../models/User';

export const getAllUsers = async (req: Request, res: Response) => {
    let allUsers = await User.findAll();
    res.json({allUsers});
}

export const getOneUser = async (req: Request, res: Response) => {
    let { id } = req.params;

    try {
        let oneUser = await User.findByPk(id);
        res.json({oneUser});
    } catch(err) {
        console.log(err);
    }
}

export const createUser = async (req: Request, res: Response) => {
    let { name, age, email } = req.body;

    try {
        let newUser = new User();
        newUser.name = name;
        newUser.age = parseInt(age);
        newUser.email = email;
        await newUser.save();
        res.status(201)
            .json({success: 'Usuário criado com sucesso!'});
    } catch(err) {
        console.log(err);
    }
}

export const updateUser = async (req: Request, res: Response) => {
    let { id } = req.params;
    let { name, age, email } = req.body;

    let user = await User.findByPk(id);
    if (user) {
        await User.update(
            {name, age, email},
            {where: {id}}
        );
        res.json({id, name, age, email});
    } else {
        res.status(204)
            .json({})
    }
    
}

export const deleteUser = async (req: Request, res: Response) => {
    let { id } = req.params;

    let user = await User.findByPk(id);
    if (user) {
        await User.destroy({
             where: {id}
        });
        res.json({});
    } else {
        res.status(204)
            .json({});
    }
}