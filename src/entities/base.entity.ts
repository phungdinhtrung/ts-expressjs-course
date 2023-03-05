import {
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn
  } from 'typeorm';
  
  export default abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    id: Number;
  
    @CreateDateColumn({ type: 'timestamptz', nullable: true })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    updated_at: Date;
    
  }
  