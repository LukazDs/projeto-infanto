import { Request, Response } from 'express';
import * as skillService from '../services/skillService.js';
import { TSkillNoPersonageId } from '../utils/skillUtils.js';

export async function insertPointsSkill(req: Request, res: Response) {
  const personageId: string = req.params.personageId;
  const skill: TSkillNoPersonageId = req.body;

  await skillService.insertSkill(skill, personageId);

  res.sendStatus(201);
}
