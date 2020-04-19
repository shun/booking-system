import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, OneToMany} from "typeorm";
import {Bookinginfo} from "./Bookinginfo";

@Entity({synchronize: false})
//@Entity({synchronize: true})
export class Facility {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 20,
    nullable: false,
    comment: ""
  })
  label: string;

  @Column({
    type: "datetime",
    nullable: false,
    comment: ""
  })
  start_datetime: Date;

  @Column({
    type: "datetime",
    nullable: true,
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

  @OneToMany(
    type => Bookinginfo,
    bookinginfo => bookinginfo.facility
  )

  bookinginfolist: Bookinginfo[];
}
