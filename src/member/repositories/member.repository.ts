import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Member } from '../entities/member.entitiy';

@EntityRepository(Member)
export class MemberRepository extends Repository<Member> {}
