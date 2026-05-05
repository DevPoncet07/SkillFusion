<script lang="ts">
    import "../../../../app.css"
    const {notification,seenNotification,deleteNotification}=$props()

   
</script>

<div class="notif {notification.seen?"seen":"unseen"}" >
    
    <a href={'/cours/' + notification.cours.slug + '/cours'} onclick={()=>seenNotification(notification.id)}>
	<div class="notif__top">
		<div class="notif__meta">
			<span class="notif__auteur">{notification.authorId}</span>
		</div>
		<span class="notif__heure">{notification.createdAt}</span>
	</div>
	<p class="notif__contenu">{notification.content}</p>
    </a>
    <button onclick={(event)=>deleteNotification(event,notification.id)}>X</button>
</div>


<style>

	.notif {
		padding: 12px 14px;
		border-radius: var(--r-md);
		background: var(--bg);
		border: 0.5px solid transparent;
		display: flex;
		flex-direction: row;
		gap: 5px;
		transition: border-color 0.15s;
	}

    .notif:hover{
        background-color: aqua;
    }

   
    .unseen{
        background-color: var(--color-notification-not-seen);
    }

    a{
        flex-grow: 1;
        text-decoration: none;
    }


	.notif__top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;

	}

	.notif__meta {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.notif__auteur {
		font-size: 12px;
		font-weight: 600;
		color: var(--dark);
	}



	.notif__heure {
		font-size: 10px;
		color: var(--gray);
		flex-shrink: 0;
	}

	.notif__contenu {
		font-size: 12px;
		color: var(--dark);
		margin: 0;
		line-height: 1.5;
	}


</style>