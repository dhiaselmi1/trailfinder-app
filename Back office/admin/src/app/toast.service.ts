// import {Injectable} from '@angular/core';
// import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
//
//
// export class Message {
//     content: string;
//     style: string;
//     dismissed: boolean= false;
//     constructor(content, style?) {
//         this.content=content
//         this.style=style || 'info'
//     }
// }
//
//
//
//
// class Message{
//     constructor(content: any, style: any) {
//
//     }
//
// }
//
// @Injectable()
// export class ToastService{
//     constructor(private db: AngularFireDatabase) {}
//      getMessages() : FirebaseListObservable<Message[]> {
//             return this.db.list('/messages',{
//                 query:{orderByKey: true,
//                     limitToast:5
//                 }
//             });
//         }
//
//         sendMessage (content, style){
//             const message = new Message(content, style)
//             this.db.list('/messages').push(message)
//         }
//
//         dismissMessage(messageKey){
//             this.db.object(`messages/${messageKey}`).update({'dismissed':true})
//         }
//
//
//
//
// }
//
