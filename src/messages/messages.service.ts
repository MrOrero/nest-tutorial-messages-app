import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  // messagesRepo: MessagesRepository;
  // constructor(messagesRepo: MessagesRepository) {
  //   this.messagesRepo = messagesRepo;
  // }

  //public means arguments are automatically assigned as properties to the class
  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
