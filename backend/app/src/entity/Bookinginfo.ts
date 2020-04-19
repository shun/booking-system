import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, JoinColumn, ManyToOne} from "typeorm";
import {User} from "./User";
import {Facility} from "./Facility";

@Entity({synchronize: false})
//@Entity({synchronize: true})
export class Bookinginfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 20,
    nullable: false,
    comment: ""
  })
  title: string;

  @Column({
    type: "datetime",
    nullable: false,
    comment: ""
  })
  start_datetime: Date;

  @Column({
    type: "datetime",
    nullable: false,
    comment: ""
  })
  end_datetime: Date;

  @Column({
    type: "boolean",
    nullable: false,
    default: "0",
    comment: ""
  })
  delflg: boolean;

  @Column({
    type: "datetime",
    nullable: false,
    default: () => "CURRENT_TIMESTAMP",
    comment: ""
  })
  created_at: Date;

  @Column({
    type: "datetime",
    nullable: false,
    default: () => "CURRENT_TIMESTAMP",
    comment: ""
  })
  updated_at: Date;

  @ManyToOne(
    type => User,
    user => user.bookinginfolist
  )
  @JoinColumn({name: "user_id"})
  user: User;

  @ManyToOne(
    type => Facility,
    facility => facility.bookinginfolist
  )
  @JoinColumn({name: "facility_id"})
  facility: Facility;
}
